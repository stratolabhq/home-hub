'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { CheckCircle, Server, Wifi, Mic, Home, Smartphone, Box, Cpu, Cloud } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const HUB_OPTIONS = [
  { value: 'home_assistant', label: 'Home Assistant', description: 'Local control',      Icon: Home,       color: 'bg-teal-100 text-teal-600' },
  { value: 'smartthings',    label: 'SmartThings',    description: 'Samsung hub',        Icon: Smartphone, color: 'bg-blue-100 text-blue-600' },
  { value: 'hubitat',        label: 'Hubitat',        description: 'Local processing',   Icon: Box,        color: 'bg-indigo-100 text-indigo-600' },
  { value: 'homey',          label: 'Homey',          description: 'All-in-one',         Icon: Cpu,        color: 'bg-purple-100 text-purple-600' },
  { value: 'none',           label: 'No Hub',         description: 'Cloud-only devices', Icon: Cloud,      color: 'bg-gray-100 text-gray-500' },
];

const PROTOCOL_OPTIONS = [
  { value: 'WiFi',      description: 'Direct to router, no hub needed' },
  { value: 'Zigbee',    description: 'Requires coordinator/hub' },
  { value: 'Z-Wave',    description: 'Requires controller' },
  { value: 'Matter',    description: 'Universal standard' },
  { value: 'Thread',    description: 'Low-power mesh' },
  { value: 'Bluetooth', description: 'Short-range only' },
];

const COORDINATOR_FIELDS: Array<{
  protocol: string;
  field: 'zigbee_coordinator' | 'zwave_controller' | 'thread_border_router' | 'matter_controller';
  label: string;
  placeholder: string;
}> = [
  { protocol: 'Zigbee',  field: 'zigbee_coordinator',   label: 'Zigbee Coordinator',   placeholder: 'e.g. Sonoff ZBDongle-P, ConBee II, SkyConnect…' },
  { protocol: 'Z-Wave',  field: 'zwave_controller',     label: 'Z-Wave Controller',    placeholder: 'e.g. Aeotec Z-Stick 7, Zooz ZST39 LR…' },
  { protocol: 'Thread',  field: 'thread_border_router', label: 'Thread Border Router', placeholder: 'e.g. Apple HomePod mini, Google Nest Hub…' },
  { protocol: 'Matter',  field: 'matter_controller',    label: 'Matter Controller',    placeholder: 'e.g. Home Assistant Green, Homey Pro…' },
];

const ECOSYSTEM_OPTIONS = [
  { value: 'alexa',          label: 'Amazon Alexa',    description: 'Echo devices' },
  { value: 'google_home',    label: 'Google Home',     description: 'Nest devices' },
  { value: 'apple_homekit',  label: 'Apple HomeKit',   description: 'iPhone / Siri' },
  { value: 'home_assistant', label: 'Home Assistant',  description: 'Open source' },
  { value: 'none',           label: 'None',            description: 'No voice assistant' },
];

interface SettingsForm {
  hub_type: string;
  hub_name: string;
  protocols_used: string[];
  zigbee_coordinator: string;
  zwave_controller: string;
  thread_border_router: string;
  matter_controller: string;
  primary_ecosystem: string;
}

const EMPTY_FORM: SettingsForm = {
  hub_type: '',
  hub_name: '',
  protocols_used: [],
  zigbee_coordinator: '',
  zwave_controller: '',
  thread_border_router: '',
  matter_controller: '',
  primary_ecosystem: '',
};

export default function SettingsPage() {
  const router = useRouter();
  const [form, setForm] = useState<SettingsForm>(EMPTY_FORM);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { router.push('/login'); return; }

    const { data } = await supabase
      .from('user_settings')
      .select('*')
      .eq('user_id', user.id)
      .maybeSingle();

    if (data) {
      setForm({
        hub_type:             data.hub_type             ?? '',
        hub_name:             data.hub_name             ?? '',
        protocols_used:       data.protocols_used       ?? [],
        zigbee_coordinator:   data.zigbee_coordinator   ?? '',
        zwave_controller:     data.zwave_controller     ?? '',
        thread_border_router: data.thread_border_router ?? '',
        matter_controller:    data.matter_controller    ?? '',
        primary_ecosystem:    data.primary_ecosystem    ?? '',
      });
    }
    setLoading(false);
  };

  const toggleProtocol = (protocol: string) => {
    setForm(prev => ({
      ...prev,
      protocols_used: prev.protocols_used.includes(protocol)
        ? prev.protocols_used.filter(p => p !== protocol)
        : [...prev.protocols_used, protocol],
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    setError('');
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { router.push('/login'); return; }

    const { error: upsertError } = await supabase
      .from('user_settings')
      .upsert(
        {
          user_id:              user.id,
          hub_type:             form.hub_type             || null,
          hub_name:             form.hub_name             || null,
          protocols_used:       form.protocols_used,
          zigbee_coordinator:   form.zigbee_coordinator   || null,
          zwave_controller:     form.zwave_controller     || null,
          thread_border_router: form.thread_border_router || null,
          matter_controller:    form.matter_controller    || null,
          primary_ecosystem:    form.primary_ecosystem    || null,
          updated_at:           new Date().toISOString(),
        },
        { onConflict: 'user_id' }
      );

    if (upsertError) {
      setError(upsertError.message);
    } else {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Loading settings…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Smart Home Settings</h1>
          <p className="text-gray-600">Configure your hub, protocols, and primary ecosystem to personalise your dashboard.</p>
        </div>

        {saved && (
          <div className="mb-6 p-4 bg-[#f0f9f2] border border-[#d1ecd7] rounded-xl flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-[#2e6f40] flex-shrink-0" />
            <p className="text-[#1f4d2b] font-medium">Settings saved successfully!</p>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        )}

        <div className="space-y-6">

          {/* Section 1: Hub Type */}
          <Card>
            <h2 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <Server className="w-5 h-5 text-[#2e6f40]" />
              Hub or Platform
            </h2>
            <p className="text-sm text-gray-500 mb-4">What smart home controller do you run?</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
              {HUB_OPTIONS.map(({ value, label, description, Icon, color }) => (
                <label
                  key={value}
                  className={`border-2 rounded-xl p-3 cursor-pointer transition-colors ${
                    form.hub_type === value
                      ? 'border-[#2e6f40] bg-[#f0f9f2]'
                      : 'border-gray-200 hover:border-[#a3d9b0]'
                  }`}
                >
                  <input
                    type="radio"
                    name="hub_type"
                    value={value}
                    checked={form.hub_type === value}
                    onChange={() => setForm(prev => ({ ...prev, hub_type: value }))}
                    className="sr-only"
                  />
                  <div className="flex items-center gap-2.5">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm leading-tight">{label}</p>
                      <p className="text-xs text-gray-500">{description}</p>
                    </div>
                  </div>
                </label>
              ))}
            </div>

            {form.hub_type && form.hub_type !== 'none' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Hub name <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  value={form.hub_name}
                  onChange={(e) => setForm(prev => ({ ...prev, hub_name: e.target.value }))}
                  placeholder='e.g. "Living Room Server", "Raspberry Pi Hub"'
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2e6f40] focus:border-transparent"
                />
              </div>
            )}
          </Card>

          {/* Section 2: Protocols */}
          <Card>
            <h2 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <Wifi className="w-5 h-5 text-[#2e6f40]" />
              Protocols in Use
            </h2>
            <p className="text-sm text-gray-500 mb-4">Select all the protocols your devices use</p>

            <div className="grid sm:grid-cols-2 gap-2 mb-5">
              {PROTOCOL_OPTIONS.map(({ value, description }) => (
                <label
                  key={value}
                  className={`border-2 rounded-xl p-3 cursor-pointer transition-colors flex items-start gap-3 ${
                    form.protocols_used.includes(value)
                      ? 'border-[#2e6f40] bg-[#f0f9f2]'
                      : 'border-gray-200 hover:border-[#a3d9b0]'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={form.protocols_used.includes(value)}
                    onChange={() => toggleProtocol(value)}
                    className="mt-0.5 accent-[#2e6f40]"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{value}</p>
                    <p className="text-xs text-gray-500">{description}</p>
                  </div>
                </label>
              ))}
            </div>

            {/* Coordinator fields — shown conditionally */}
            {COORDINATOR_FIELDS.filter(cf => form.protocols_used.includes(cf.protocol)).length > 0 && (
              <div className="border-t border-gray-100 pt-4 space-y-4">
                <p className="text-sm font-medium text-gray-700">Protocol controllers</p>
                {COORDINATOR_FIELDS
                  .filter(cf => form.protocols_used.includes(cf.protocol))
                  .map(({ field, label, placeholder }) => (
                    <div key={field}>
                      <label className="block text-sm text-gray-700 mb-1">{label}</label>
                      <input
                        type="text"
                        value={form[field]}
                        onChange={(e) => setForm(prev => ({ ...prev, [field]: e.target.value }))}
                        placeholder={placeholder}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2e6f40] focus:border-transparent"
                      />
                    </div>
                  ))
                }
              </div>
            )}
          </Card>

          {/* Section 3: Primary Ecosystem */}
          <Card>
            <h2 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <Mic className="w-5 h-5 text-[#2e6f40]" />
              Primary Voice Assistant
            </h2>
            <p className="text-sm text-gray-500 mb-4">This filters compatibility info on your dashboard</p>

            <div className="grid sm:grid-cols-2 gap-2">
              {ECOSYSTEM_OPTIONS.map(({ value, label, description }) => (
                <label
                  key={value}
                  className={`border-2 rounded-xl p-3 cursor-pointer transition-colors ${
                    form.primary_ecosystem === value
                      ? 'border-[#2e6f40] bg-[#f0f9f2]'
                      : 'border-gray-200 hover:border-[#a3d9b0]'
                  }`}
                >
                  <input
                    type="radio"
                    name="primary_ecosystem"
                    value={value}
                    checked={form.primary_ecosystem === value}
                    onChange={() => setForm(prev => ({ ...prev, primary_ecosystem: value }))}
                    className="sr-only"
                  />
                  <p className="font-semibold text-gray-900 text-sm">{label}</p>
                  <p className="text-xs text-gray-500">{description}</p>
                </label>
              ))}
            </div>
          </Card>

          {/* Save */}
          <Button
            onClick={handleSave}
            loading={saving}
            size="lg"
            className="w-full"
          >
            Save Settings
          </Button>

        </div>
      </div>
    </div>
  );
}
