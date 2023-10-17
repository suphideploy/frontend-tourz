import React from 'react'

function ResponsiveTable() {
  return (

    <div className='flex items-center justify-center'>
        <div class="container">
		<table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
			<thead class="text-white">
				<tr class="bg-sky-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
					<th class="p-3 text-left">From</th>
					<th class="p-3 text-left">To</th>
                    <th class="p-3 text-left">Price Private</th>
					<th class="p-3 text-left">Price Per Adult</th>
                    <th class="p-3 text-left">Price Per Children</th>
                    <th class="p-3 text-left">By</th>
				</tr>
				<tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th class="p-3 text-left">From</th>
					<th class="p-3 text-left">To</th>
                    <th class="p-3 text-left">Price Private</th>
					<th class="p-3 text-left">Price Per Adult</th>
                    <th class="p-3 text-left">Price Per Children</th>
                    <th class="p-3 text-left">By</th>
				</tr>
                <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th class="p-3 text-left">From</th>
					<th class="p-3 text-left">To</th>
                    <th class="p-3 text-left">Price Private</th>
					<th class="p-3 text-left">Price Per Adult</th>
                    <th class="p-3 text-left">Price Per Children</th>
                    <th class="p-3 text-left">By</th>
              </tr>
                <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th class="p-3 text-left">From</th>
					<th class="p-3 text-left">To</th>
                    <th class="p-3 text-left">Price Private</th>
					<th class="p-3 text-left">Price Per Adult</th>
                    <th class="p-3 text-left">Price Per Children</th>
                    <th class="p-3 text-left">By</th>
              </tr>
			</thead>
			<tbody class="flex-1 sm:flex-none">
				<tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
					<td class="border-grey-light border hover:bg-gray-100 p-3">Phuket</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3">Samui</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3">1200 THB</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3">900 THB</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3 ">500 THB</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3">Private Boat</td>
					{/*<td class="border-grey-light border hover:bg-gray-100 p-3 truncate">contato@johncovv.com</td>*/}
					
				</tr>
				<tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                <td class="border-grey-light border hover:bg-gray-100 p-3">Phuket</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3">Samui</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3">1200 THB</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3">900 THB</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3 ">500 THB</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3">Private Boat</td>
					{/*<td class="border-grey-light border hover:bg-gray-100 p-3 truncate">contato@johncovv.com</td>*/}
				</tr>
                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                <td class="border-grey-light border hover:bg-gray-100 p-3">Phuket</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3">Samui</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3">1200 THB</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3">900 THB</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3 ">500 THB</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3">Private Boat</td>
					{/*<td class="border-grey-light border hover:bg-gray-100 p-3 truncate">contato@johncovv.com</td>*/}
                </tr>
                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                <td class="border-grey-light border hover:bg-gray-100 p-3">Phuket</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3">Samui</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3">1200 THB</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3">900 THB</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3 ">500 THB</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3">Private Boat</td>
					{/*<td class="border-grey-light border hover:bg-gray-100 p-3 truncate">contato@johncovv.com</td>*/}
                </tr>
			</tbody>
		</table>
	 </div>
      
    </div>
  )
}
{/*https://tailwindcomponents.com/component/mobile-responsive-table */}
export default ResponsiveTable
