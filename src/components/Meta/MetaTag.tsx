import { ContentBadge, Label } from '@jects/jds';

interface MetaProps {
  tag: string;
  value: string;
}

export function MetaTag({ tag, value }: MetaProps) {
  return (
    <div className="flex gap-6">
      <ContentBadge.Basic hierarchy="secondary" size="xs" badgeStyle="alpha">
        {tag}
      </ContentBadge.Basic>
      <Label size="sm" textAlign="right" weight="normal">
        {value}
      </Label>
    </div>
  );
}
