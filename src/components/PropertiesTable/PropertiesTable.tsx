'use client';

import { Table } from '@jects/jds';

import { PropertiesTableProps } from './PropertiesTable.type';

export function PropertiesTable({ rows }: PropertiesTableProps) {
  return (
    <div className="flex flex-col gap-24">
      <div className="rounded-6 overflow-hidden">
        <Table.Root>
          <Table.Header>
            <Table.HeaderItem>이름</Table.HeaderItem>
            <Table.HeaderItem>기본값</Table.HeaderItem>
            <Table.HeaderItem>타입</Table.HeaderItem>
          </Table.Header>
          <Table.Body>
            {rows.map((row) => (
              <Table.Row key={row.name}>
                <Table.RowItem variant="label" description={row.description}>
                  {row.name}
                </Table.RowItem>
                <Table.RowItem variant="code">{row.default ?? '-'}</Table.RowItem>
                <Table.RowItem variant="code">
                  {row.type.map((rowType) => (
                    <span key={rowType}>{rowType}</span>
                  ))}
                </Table.RowItem>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
}
