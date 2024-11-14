'use client'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import config from "tailwindcss/defaultConfig";
import { Config } from "tailwindcss";

export function FontTable() {
  const [text, setText] = useState('Hi')
  if (!config.theme) return <></>
  const fontSize = Object.entries(config.theme.fontSize as Config)
  return (
    <>
      <Input value={text} onChange={e => setText(e.target.value)} placeholder='문구를 입력해주세요.' />
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead className="w-[100px]">Status</TableHead>
            <TableHead className="w-[100px]">Method</TableHead>
            <TableHead className="text-right">문구</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fontSize.map(([name, attr]) => (
            <TableRow key={`fs-${name}`}>
              <TableCell className="font-medium">{name}</TableCell>
              <TableCell>{attr[0]}</TableCell>
              <TableCell>{attr[1].lineHeight}</TableCell>
              <TableCell className="text-right"><span style={{
                fontSize: attr[0],
                lineHeight: attr[1].lineHeight
              }}>{text}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
