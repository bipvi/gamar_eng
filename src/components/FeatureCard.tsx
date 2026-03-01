// src/components/FeatureCard.tsx
const FeatureCard = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="group border border-white/10 bg-white/5 p-8 backdrop-blur-sm hover:border-brand-blue/50 transition-all duration-500">
      <h3 className="text-brand-blue font-mono text-lg mb-4 flex items-center gap-2">
        <span className="opacity-50">//</span> {title.toUpperCase()}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard;