"use client"

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ChangeEvent, useState } from 'react';

export default function Home() {
  const [binary, setBinary] = useState<string>('')
  const [decimal, setDecimal] = useState<number>()

  const handleBinaryValue = (event: ChangeEvent<HTMLInputElement>) => {
    const binaryValue = event.target.value

    if (/^[01]*$/.test(binaryValue) || binaryValue === '') {
      setBinary(binaryValue)
    }
  }

  const convertBinaryToDecimal = () => {
    setDecimal(0)

    const decimalvalue = binary.split('').reverse().reduce((accumulator, singleDigit, index) => {
      return accumulator + (singleDigit === '1' ? Math.pow(2, index) : 0)
    }, 0)

    setDecimal(decimalvalue)
  }

  return (
    <div className="w-screen h-screen border-4 border-blue-600 flex justify-center items-center">
      <div className="border-2 border-blue-600 rounded-2xl p-6 flex flex-col ">
        <Label htmlFor='binary' className="text-2xl">Bin2Dec</Label>
        <div className="mt-4 flex items-center justify-between">
          <Input
            id='binary'
            className="w-fit border-blue-600"
            value={binary}
            onChange={handleBinaryValue}
            placeholder='Informe um valor binário'
          />
          <Button
            className="bg-blue-500 ml-3"
            size="lg"
            onClick={convertBinaryToDecimal}
          >
            Converter
          </Button>
        </div>
        <div className="flex flex-col">
          <span className="">Obs: o campo aceita apenas os dígitos 0 ou 1</span>
          <Label className="mt-4 text-2xl">{!!decimal && `Valor Decimal: ${decimal}`}</Label>
        </div>
      </div>
    </div>
  )
};