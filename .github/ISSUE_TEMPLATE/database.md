---
name: 🗄️ Database Change
about: Database migration or schema change
title: '[Database] '
labels: 'database'
assignees: ''
---

## Description
<!-- What database change is needed and why? -->

## SQL Migration
<!-- Write your SQL migration here -->
```sql
-- Write your SQL here


```

## Verification Query
<!-- Query to verify the change worked -->
```sql
-- This query confirms the migration succeeded
SELECT COUNT(*) FROM [table_name];
```

## Rollback Plan
<!-- How to revert if something goes wrong -->
```sql
-- If we need to rollback, run this:


```

## Impact Analysis
- [ ] Affects user data
- [ ] Affects authentication
- [ ] Affects performance
- [ ] New indexes needed
- [ ] RLS policies need update

## Testing Checklist
- [ ] Migration tested on local Supabase
- [ ] Backup created of production database
- [ ] Verification query tested locally
- [ ] Rollback plan tested locally
- [ ] No sensitive data exposed
- [ ] Performance impact assessed

## Deployment
- [ ] Ready for production
- [ ] Requires downtime: [Yes/No]
- [ ] Dependent on code changes: [Yes/No]

## Related Issues
<!-- Link any related issues: #123 -->

## Notes
<!-- Any other important notes -->
