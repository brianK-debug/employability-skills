import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    // Dynamically import AOS to avoid SSR issues
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
        disable: 'phone',
      });
    };

    initAOS();

    // Cleanup
    return () => {
      // AOS cleanup if needed
    };
  }, []);
};
