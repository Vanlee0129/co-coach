import supabase from '@/utils/supabase';

export const queryOnlineUser = async () => {
  const { data: user, error } = await supabase.from('user').select().eq('status', 'online');

  if (error) {
    return {
      error: error.message,
      success: false,
    };
  }

  return {
    data: user,
    success: true,
  };
};
