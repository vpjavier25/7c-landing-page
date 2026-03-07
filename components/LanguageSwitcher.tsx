'use client'; // Required for interactivity

import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const changeLanguage = (locale: string) => {
    // Redirect to the new locale while preserving the current path
    router.push(`/${locale}${pathname.replace(/^\/(en-US|es-CO)/, '')}`);
  };
  return (
    <div className="fixed lg:top-5 lg:right-5 top-20 right-5 z-100 rounded-full">
      <button onClick={() => changeLanguage('en-US')} className={`rounded-l-lg p-2  ${pathname === '/en-US' ? 'bg-primary text-white' : ''}`}>English</button>
      <button onClick={() => changeLanguage('es-CO')} className={`rounded-r-lg p-2 ${pathname === '/es-CO' ? 'bg-primary text-white' : ''}`}>Español</button>
    </div>
  );
}