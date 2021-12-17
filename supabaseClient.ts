import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { SUPABASE_URL, SUPABASE_ANON_KEY } from '@env';

const SUPABASE_URL='https://chlwotyjwtqhcsxqwgwe.supabase.co'
const SUPABASE_ANON_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTQ4MTU1MiwiZXhwIjoxOTU1MDU3NTUyfQ.Y3W_Bn-Su0IUlQDrhiR96yJi3W1qJEBnN2XWbpU9unE';

console.log(SUPABASE_ANON_KEY, SUPABASE_URL);

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    localStorage: AsyncStorage,
});

export { supabase };