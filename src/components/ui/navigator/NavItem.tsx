import { delayOpenAnimVariants } from '@constants/anim/variants';
import { cn } from '@lib/utils';
import type { ClassValue } from 'clsx';
import { motion } from 'motion/react';
import type { JSX } from 'react';

export type NavItemProps = {
  selected?: boolean;
  name?: string;
  icon?: JSX.Element;
  onClick?: () => void;
  className?: ClassValue;
  indicatorClass?: string;
  type?: 'header' | 'sider';
  layoutIdPrefix?: string;
};
function NavItem({
  selected,
  icon,
  name,
  onClick,
  className,
  indicatorClass,
  type = 'header',
  layoutIdPrefix = 'header',
}: NavItemProps) {
  return (
    <motion.div variants={delayOpenAnimVariants} whileHover={{ scale: 1.1 }}>
      <div
        className={cn(
          'relative flex w-full cursor-pointer items-center justify-center text-base',
          {
            'text-white': selected && type !== 'header',
            'text-primary': selected && type === 'header',
            'z-0': type === 'sider',
          },
          className,
        )}
        onClick={onClick}
      >
        {icon}
        {name}
        {selected && (
          <motion.div
            className={cn(
              'border-primary absolute inset-x-0 -bottom-1.5 border-t-2',
              {
                'bg-gradient-pink inset-0 -z-10 rounded-lg border-none': type === 'sider',
              },
              indicatorClass,
            )}
            layoutId={`${layoutIdPrefix ?? 'header'}_tab_selected`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          />
        )}
      </div>
    </motion.div>
  );
}
export default NavItem;
