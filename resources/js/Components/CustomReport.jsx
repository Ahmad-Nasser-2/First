import React from "react";

/*
  CustomReport Component
 
  Props:
   - data: Array of objects, where each object should have:
   - product: string
   - quantity: number
   - singlePrice: number
   - discount: number
   - totalPrice: number
 
  This component renders a responsive report with:
   - A header row containing the titles: "Product", "Quantity", "Single Price", "Discount", "Total Price"
   - A thick line under the header.
   - Each data row is displayed as a row with a bottom border and hover styles.
   - At the bottom, a summary area showing "TVA:" and "Total Price:".
 */

const CustomReport = ({ data }) => {
    // Calculate the total price sum and TVA (assumed at 15% of total)
    const totalPriceSum = data.reduce(
        (acc, row) => acc + Number(row.totalPrice),
        0
    );
    const TVA = totalPriceSum * 0.15; // Adjust TVA percentage as needed

    return (
        <div className="p-4 border border-black dark:border-white">
            {/* Responsive container with horizontal scroll on small screens */}
            <div className="overflow-x-auto">
                {/* Header */}
                <div className="grid grid-cols-5 gap-4 font-bold text-sm text-gray-700 dark:text-gray-200">
                    <div className="p-2">Product</div>
                    <div className="p-2 text-center">Quantity</div>
                    <div className="p-2 text-center">Single Price</div>
                    <div className="p-2 text-center">Discount</div>
                    <div className="p-2 text-center">Total Price</div>
                </div>

                {/* Thick line under header */}
                <div className="border-b-4 border-stone-800 dark:border-slate-200 mb-2"></div>

                {/* Data Rows */}
                <div className="space-y-2">
                    {data.map((row, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-5 gap-4 items-center p-2 text-stone-600 dark:text-stone-400 border-b border-stone-600 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-600 transition-colors"
                        >
                            <div className="p-2">{row.product}</div>
                            <div className="p-2 text-center">
                                {row.quantity}
                            </div>
                            <div className="p-2 text-center">
                                {row.singlePrice}
                            </div>
                            <div className="p-2 text-center">
                                {row.discount}
                            </div>
                            <div className="p-2 text-center">
                                {row.totalPrice}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Summary */}
            <div className="mt-4 flex justify-end space-x-8 text-gray-700 dark:text-gray-200 font-bold">
                <div>
                    TVA: <span>{TVA.toFixed(2)}</span>
                </div>
                <div>
                    Total Price: <span>{totalPriceSum.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default CustomReport;
