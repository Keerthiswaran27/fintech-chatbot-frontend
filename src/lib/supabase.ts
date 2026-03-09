import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kppynrhgjcvrutwlihit.supabase.co";
const supabaseAnonKey = "sb_publishable_mWK8wLcG_a5ywYGebbIrpQ_0lrNL-UD";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);