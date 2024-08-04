'use client';

import React, { useMemo } from "react"
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { IceCreamIcon, PlaneTakeoffIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export interface CommandMenuProps {
  data: { title: string; category: 'food' | 'travel'; url: string; }[]
}

export function CommandMenu({ data: results }: CommandMenuProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState<string | null>(null);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, []);

  const filteredResults = useMemo(() => results
    .filter(result => {
      if (search === '' || search === null) {
        return true;
      }

      return result.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    })
    .slice(0, 5), [search]);

  if (pathname === '/explore') {
    return null;
  }

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search..." onValueChange={search => setSearch(search)} />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Suggestions'>
            {filteredResults
              .map(result => (
                <CommandItem
                  value={result.title}
                  key={result.title}
                  onSelect={() => {
                    router.push(result.url)
                    setOpen(false);
                  }}>
                  {result.category === 'food' && (<IceCreamIcon className="mr-2 h-4 w-4" />)}
                  {result.category === 'travel' && (<PlaneTakeoffIcon className="mr-2 h-4 w-4" />)}
                  <span>{result.title}</span>
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
      <div className='hidden md:flex helper py-2 px-4 fixed bg-slate-50 text-slate-800 bottom-0 right-0 rounded-tl-lg cursor-pointer' onClick={() => setOpen(true)}>
        <p className="text-sm text-muted-foreground">
          Search{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </p>
      </div>
    </>

  )
}
