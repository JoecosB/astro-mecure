import type React from 'react';
import type { SVGProps } from 'react';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { twMerge } from 'tailwind-merge';
export interface ArticleLicenseProps extends React.ComponentPropsWithoutRef<'div'> {
  url: string;
  title: string;
  date: Date;
  updateDate: Date;
  author: string;
}

function IconCreativeCommons(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M11.983 0c-3.292 0-6.19 1.217-8.428 3.485C1.25 5.819 0 8.844 0 12c0 3.189 1.217 6.148 3.522 8.45c2.305 2.3 5.3 3.55 8.461 3.55c3.16 0 6.222-1.25 8.593-3.583C22.815 18.214 24 15.287 24 12c0-3.255-1.186-6.214-3.458-8.483C18.238 1.217 15.275 0 11.983 0zm.033 2.17c2.7 0 5.103 1.02 6.98 2.893c1.843 1.841 2.83 4.274 2.83 6.937c0 2.696-.954 5.063-2.798 6.872c-1.943 1.906-4.444 2.926-7.012 2.926c-2.601 0-5.038-1.019-6.914-2.893c-1.877-1.875-2.93-4.34-2.93-6.905c0-2.597 1.053-5.063 2.93-6.97c1.844-1.874 4.214-2.86 6.914-2.86zM8.68 8.278C6.723 8.278 5.165 9.66 5.165 12c0 2.38 1.465 3.722 3.581 3.722c1.358 0 2.516-.744 3.155-1.874l-1.491-.758c-.333.798-.839 1.037-1.478 1.037c-1.105 0-1.61-.917-1.61-2.126c0-1.21.426-2.127 1.61-2.127c.32 0 .96.173 1.332.97l1.597-.838c-.68-1.236-1.837-1.728-3.181-1.728zm6.932 0c-1.957 0-3.514 1.382-3.514 3.722c0 2.38 1.464 3.722 3.58 3.722c1.359 0 2.516-.744 3.155-1.874l-1.49-.758c-.333.798-.84 1.037-1.478 1.037c-1.105 0-1.611-.917-1.611-2.126c0-1.21.426-2.127 1.61-2.127c.32 0 .96.173 1.332.97l1.597-.838c-.68-1.236-1.837-1.728-3.181-1.728z"></path>
    </svg>
  )
}
export default function ArticleLicense({
  url,
  title,
  date,
  updateDate,
  author,
  className,
  ...rest
}: ArticleLicenseProps) {
  
  return (
    <div className={twMerge(
      'relative bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 p-5 overflow-hidden',
      className
    )} {...rest}>
      <div className="space-y-2">
        <p className="text-sm font-bold">{title}</p>
        <p className="text-sm opacity-60">
          <a href={url}>{url}</a>
        </p>
        <div className="flex space-x-4">
          <div className="text-sm">
            <h6 className="mb-1">作者</h6>
            <p>{author}</p>
          </div>
          <div className="text-sm">
            <h6 className="mb-1">发布于</h6>
            <p>{format(date, 'PPP', { locale: zhCN })}</p>
          </div>
          <div className="text-sm">
            <h6 className="mb-1">编辑于</h6>
            <p>{format(updateDate, 'PPP', { locale: zhCN })}</p>
          </div>
          <div className="text-sm">
            <h6 className="mb-1">许可协议</h6>
            <div className="flex space-x-1">
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh">CC BY-NC-SA 4.0</a>
            </div>
          </div>
        </div>
        <p>转载或引用本文时请注明作者及出处，不得用于商业用途。</p>
      </div>
      <IconCreativeCommons className="w-8 h-8 scale-[6] origin-bottom-right absolute -right-6 bottom-3 opacity-10 z-0" />
    </div>
  )
}