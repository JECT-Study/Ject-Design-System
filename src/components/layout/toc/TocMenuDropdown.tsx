"use client"

import React, { ReactNode } from "react";
import { Menu } from "@jects/jds";
import { useToc } from "./useToc";

interface TocMenuDropdownProps {
    trigger: ReactNode;
    align?: "start" | "center" | "end";
    sideOffset?: number;
}

export function TocMenuDropdown({
    trigger,
    align = "end",
    sideOffset = 12
}: TocMenuDropdownProps) {
    const { headings, activeId, scrollToId } = useToc();

    return (
        <Menu.Root menuStyle="solid" size="md">
            <Menu.Trigger asChild>
                {trigger}
            </Menu.Trigger>
            <Menu.Content align={align} sideOffset={sideOffset} className="max-h-160 overflow-y-auto">
                <Menu.Category>이 문서 내용에서:</Menu.Category>
                <Menu.Group>
                    {headings.length === 0 && (
                        <Menu.GroupItem>
                            <Menu.Button disabled>목차가 없습니다.</Menu.Button>
                        </Menu.GroupItem>
                    )}
                    {headings.map((heading, index) => (
                        <Menu.GroupItem key={heading.id || `fallback-key-${index}`}>
                            <Menu.Button
                                isSelected={activeId === heading.id}
                                onClick={(e) => scrollToId(heading.id, e)}
                                style={{ paddingLeft: `calc(${(heading.level - 2)}rem + 0.75rem)` }}
                                className={activeId === heading.id ? "after:opacity-[0.08]!" : ""}
                            >
                                {heading.title}
                            </Menu.Button>
                        </Menu.GroupItem>
                    ))}
                </Menu.Group>
            </Menu.Content>
        </Menu.Root>
    );
}
