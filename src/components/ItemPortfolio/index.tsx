
interface ItemPortfolio {
  title: string
  description: string
  url: string
  tags: string[]
}

export function ItemPortfolio({ title, description, url, tags }: ItemPortfolio) {
  return (
    <div className="mb-8">
      <div className="flex items-center w-full gap-4">
        <div className="max-w-md">
          <p className="text-4xl font-semibold">
            {title}
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            {tags.map((item) => (
              <span key={item} className="px-2 py-1 border cursor-default rounded-3xl hover:bg-neutral-600 hover:bg-opacity-20">
                {item}
              </span>
            ))}
          </div>
          <p className="my-8 text-lg font-light">
            {description}
          </p>
        </div>

        <div className="flex-1 bg-center bg-no-repeat bg-cover h-[90vh]" style={{ backgroundImage: url }} />
      </div>

      <div className="flex flex-col justify-end ml-96">

      </div>
    </div>

  )
}
