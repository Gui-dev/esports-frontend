import React, { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import logoImg from './assets/logo.svg'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { CreateAdModal } from './components/CreateAdModal'

import { api } from './services/api'

import './styles/main.css'

type GamesProps = {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

function App () {
  const [games, setGames] = useState<GamesProps[]>([])

  useEffect(() => {
    const loadGames = async () => {
      const { data } = await api.get('/games')
      setGames(data)
    }
    loadGames()
  }, [])

  return (
    <section className="flex flex-col items-center mx-auto my-10 px-10 max-w-[1344px]">
      <img src={logoImg} />
      <h1 className="text-6xl text-white font-black mt-10">
        Seu <span className="text-transparent bg-clip-text bg-gradient-text">duo</span> está aqui
      </h1>

      <div className="flex flex-1 w-full mt-10">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={6}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="px-11"
        >
          {games.map(game => {
            return (
              <SwiperSlide
                key={game.id}
                className="px-2 z-10"
              >
                <GameBanner
                  bannerUrl={game.bannerUrl}
                  title={game.title}
                  adsCount={game._count.ads}
                />
              </SwiperSlide>

            )
          })}
        </Swiper>
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </section >
  )
}

export default App
