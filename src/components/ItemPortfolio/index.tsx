
interface ItemPortfolio {
  title: string
  description: string
  url: string
  tags: string[]
}

export function ItemPortfolio({ title, description, url, tags }: ItemPortfolio) {
  return (
    <div className="mb-8">
      <div className="flex flex-col justify-center w-full bg-right bg-no-repeat bg-cover h-svh" style={{ backgroundImage: url }}>
        <p className="text-4xl font-semibold max-w-[24rem]">
          {title}
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          {tags.map((item) => (
            <span key={item} className="px-2 py-1 border cursor-default rounded-3xl hover:bg-neutral-600 hover:bg-opacity-20">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-end ml-96">
        <p className="my-8 text-lg font-light">
          {description}
        </p>
      </div>
    </div>

  )
}
