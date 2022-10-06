import React from 'react'

type GameBannerProps = {
  bannerUrl: string
  title: string
  adsCount: number
}

export const GameBanner = ({ bannerUrl, title, adsCount }: GameBannerProps) => {
  return (
    <a href="#" className="relative rounded-lg overflow-hidden z-0">
      <img src={bannerUrl} alt={title} />
      <div className="absolute bottom-0 left-0 right-0 w-full pt-16 pb-4 px-4 bg-game-gradient">
        <strong className="block font-bold text-white">{title}</strong>
        <span className="block text-sm text-zinc-300 mt-1">{adsCount} anúncio(s)</span>
      </div>
    </a>
  )
}
