import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface FeatureProps {
  features: string[];
}

export default function PropertyFeatures({ features }: FeatureProps) {
  const { lang } = useLanguage();

  return (
    <div className="bg-gray-50 p-6 rounded-xl mt-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        {lang === 'tr' ? 'Emlak Özellikleri' : 'Property Features'}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-gray-700">
            <CheckCircle2 size={18} className="text-blue-600 " />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
