import classNames from 'classnames';
import { CompanyLogo } from './CompanyLogo';

interface FooterProps {
  page: 'event' | 'subscribe';
}

export function Footer(props: FooterProps) {
  return (
    <footer
      className={classNames('w-full pb-6', {
        'bg-gray-700': props.page === 'subscribe',
        'bg-gray-900': props.page === 'event',
        'px-6': props.page === 'subscribe',
        'px-8': props.page === 'event',
      })}
    >
      <div className="w-full flex flex-col items-center justify-between border-t-[1px] border-gray-500 pt-6 md:flex-row">
        <div className="flex flex-col items-center md:flex-row">
          <CompanyLogo />
          <span className="ml-6 text-sm text-gray-300 mt-4 md:mt-0">
            Rocketseat - Todos os direitos reservados
          </span>
        </div>
        <span className="text-sm text-gray-300 mt-6 md:mt-0">
          Políticas de privacidade
        </span>
      </div>
    </footer>
  );
}
