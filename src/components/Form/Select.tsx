import React from 'react'
import * as Select from '@radix-ui/react-select'
import { CaretDown } from 'phosphor-react'

type GamesProps = {
  id: string
  title: string
  bannerUrl: string
}

type InputSelectProps = Select.SelectProps & {
  games: GamesProps[]
}

export const InputSelect = ({ games, ...rest }: InputSelectProps) => {
  return (
    <div className="flex py-3 px-4 bg-zinc-900 rounded z-10">
      <Select.Root {...rest}>
        <Select.Trigger className="flex flex-1 items-center justify-between">
          <Select.Value className="placeholder:text-zinc-500" placeholder="Selecione o game que deseja jogar" />
          <Select.Icon>
            <CaretDown className="text-white" />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal className=" w-full bg-zinc-700">
          <Select.Content className="z-10">
            <Select.Viewport>
              <Select.Group>

                {games.map(game => {
                  return (
                    <Select.Item
                      key={game.id}
                      value={game.id}
                      className="text-white py-2 px-4 cursor-pointer hover:bg-violet-500"
                    >
                      <div className="flex flex-row items-center justify-between">
                        <Select.ItemText className="text-white">{game.title}</Select.ItemText>
                        <img src={game.bannerUrl} className="h-6 w-6" />
                      </div>
                      <Select.Separator className="self-stretch my-1 h-[1px] w-full bg-zinc-600" />
                    </Select.Item>
                  )
                })}

              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div >
  )
}
