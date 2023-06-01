import { createClient } from "@supabase/supabase-js"

export const supabase = createClient(
  "https://qqsdsmuqrdrzaduhkets.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxc2RzbXVxcmRyemFkdWhrZXRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ3MjYwMzIsImV4cCI6MTk5MDMwMjAzMn0.74sI3zVwdO1TdwbvLwpw-Pv9o9mW6iv4Jg8JPvVhmow",
)
