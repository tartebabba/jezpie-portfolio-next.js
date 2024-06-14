import React, { ReactNode } from 'react';

export default function CardTopBorderFlex({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-wrap border-t py-2">{children}</div>;
}
