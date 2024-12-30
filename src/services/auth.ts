import supabase from '@/utils/supabase';

export const userLogin = async () => {
  const { data, error } = await supabase.auth.signInAnonymously();

  if (error) {
    return {
      error: error.message,
      success: false,
    };
  }

  return {
    data,
    success: true,
  };
};
