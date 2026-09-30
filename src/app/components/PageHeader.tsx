import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  aside,
  compact,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  aside?: ReactNode;
  /** 工作台页用的单行紧凑头部：标题+副标题居左、aside 居右，不占海报式高度 */
  compact?: boolean;
}) {
  if (compact) {
    return (
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-left">
        <div className="min-w-0">
          <h1 className="text-xl font-black tracking-tight sm:text-2xl">{title}</h1>
          {subtitle ? (
            <p className="mt-1 truncate text-xs font-light text-black/70 sm:text-sm">{subtitle}</p>
          ) : null}
        </div>
        {aside}
      </div>
    );
  }
  const heading = (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-black/55">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-2xl font-black tracking-tight text-black sm:text-3xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="mx-auto mt-3 max-w-xl text-sm font-light leading-6 text-black sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );

  if (!aside) {
    return heading;
  }

  return (
    <div className="relative flex flex-col items-center gap-4 text-center lg:block">
      {heading}
      {aside}
    </div>
  );
}
