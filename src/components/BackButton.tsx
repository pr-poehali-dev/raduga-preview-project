import Icon from '@/components/ui/icon';

interface BackButtonProps {
  onClick: () => void;
  color?: string;
}

const BackButton = ({ onClick, color = 'text-crimson' }: BackButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 ${color} font-semibold mb-6 hover:opacity-70 transition-all hover:-translate-x-1 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm`}
    >
      <Icon name="ChevronLeft" size={18} />
      <span>Назад</span>
    </button>
  );
};

export default BackButton;
