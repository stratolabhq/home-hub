CREATE TABLE IF NOT EXISTS user_settings (
  id                    UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id               UUID        UNIQUE NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,

  -- Hub / coordinator
  hub_type              TEXT,         -- 'home_assistant' | 'smartthings' | 'hubitat' | 'homey' | 'none'
  hub_name              TEXT,         -- free-text label, e.g. "Living Room Server"

  -- Protocols in use
  protocols_used        TEXT[]      NOT NULL DEFAULT '{}',

  -- Per-protocol coordinator free-text (only meaningful when protocol selected)
  zigbee_coordinator    TEXT,
  zwave_controller      TEXT,
  thread_border_router  TEXT,
  matter_controller     TEXT,

  -- Ecosystem
  primary_ecosystem     TEXT,         -- 'alexa' | 'google_home' | 'apple_homekit' | 'smartthings' | 'matter' | 'home_assistant'

  created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at            TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_user_settings_user ON user_settings(user_id);

ALTER TABLE user_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users read own settings"
  ON user_settings FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users insert own settings"
  ON user_settings FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update own settings"
  ON user_settings FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
