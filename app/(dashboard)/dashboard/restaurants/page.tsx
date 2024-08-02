import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import RestaurantsTable from './_components/RestaurantsTable'

const page = () => {
  return (
      <div>
        <div className="flex justify-between flex-col xvsm:flex-row gap-y-3">
          <h1 className="font-semibold text-3xl xvsm:pb-10 opacity-80">
            Users
          </h1>
          {/* <Link href={"/dashboard/vehicles/add_vehicle"} className='xvsm:p-0 pb-6 m-0'>
            <Button className="px-5 py-2.5 my-auto text-[16px] w-[160px] h-[40px] font-medium text-white rounded-md bg-accent border-r-0 !p-0">
              <PlusCircle className="size-5" />
              &nbsp; Add Users
            </Button>
          </Link> */}
        </div>
        <RestaurantsTable />
      </div>
  )
}

export default page