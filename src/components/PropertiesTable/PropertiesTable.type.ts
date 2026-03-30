export interface PropertyRow {
  name: string;
  type: string[];
  default?: string;
  description?: string;
}

export interface PropertiesTableProps {
  rows: PropertyRow[];
}
