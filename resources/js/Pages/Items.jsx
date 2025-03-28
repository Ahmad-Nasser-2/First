import React from "react";
import CustomInput from "../Components/CustomInput";
import CustomSelect from "../Components/CustomSelect";
import CustomTable from "../Components/CustomTable";

const Items = () => {
    //ex of select opt...
    const options = ["3", "1", "2", "4", "5"];
    const titles = ["Name", "Age", "Email", "Role"]; // Column titles
    const data = [
        ["John Doe", 28, "john@example.com", "Admin"],
        ["Jane Smith", 34, "jane@example.com", "User"],
        ["Sam Green", 22, "sam@example.com", "User"],
        // More rows...
    ];

    const filterOptions = [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
        { label: "All", value: "all" },
    ];

    const handleQueryChange = (query) => {
        console.log("Search query:", query);
    };

    const handleFilterChange = (filter) => {
        console.log("Selected filter:", filter);
    };

    return (
        <div className="p-4">
            {/* Inputs & Custom Select Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* For xs screens we want each input container to be 2/3 width and centered */}
                <div className="mx-auto w-2/3 sm:w-full">
                    <CustomInput
                        id="ItemBarcode"
                        name="itemBarcode"
                        label="Item Barcode"
                    />
                </div>
                <div className="mx-auto w-2/3 sm:w-full">
                    <CustomInput
                        id="ItemName"
                        name="itemName"
                        label="Item Name"
                        required
                    />
                </div>
                <div className="mx-auto w-2/3 sm:w-full">
                    <CustomInput
                        id="ItemSellingPrice"
                        name="itemSellingPrice"
                        label="Item Selling Price"
                        type="number"
                        addon="$"
                    />
                </div>
                <div className="mx-auto w-2/3 sm:w-full">
                    <CustomInput
                        id="ItemBuyingPrice"
                        name="itemBuyingPrice"
                        label="Item Buying Price"
                        type="number"
                        addon="$"
                    />
                </div>
                <div className="mx-auto w-2/3 sm:w-full">
                    <CustomInput
                        id="ItemQuantity"
                        name="itemQuantity"
                        label="Item Quantity"
                        type="number"
                    />
                </div>
                <div className="mx-auto w-2/3 sm:w-full">
                    <CustomInput
                        id="ItemBrand"
                        name="itemBrand"
                        label="Item Brand"
                    />
                </div>
                <div className="mx-auto w-2/3 sm:w-full">
                    <CustomInput
                        id="ItemThreshold"
                        name="itemThreshold"
                        label="Item Threshold"
                        type="number"
                    />
                </div>
                <div className="mx-auto w-2/3 sm:w-full">
                    <CustomInput
                        id="ItemMaxDiscount"
                        name="itemMaxDiscount"
                        label="Item Max Discount"
                        type="number"
                        addon="%"
                    />
                </div>
                <div className="mx-auto w-2/3 sm:w-full">
                    <CustomInput
                        id="ItemTVA"
                        name="itemTVA"
                        label="Item TVA"
                        type="number"
                        addon="%"
                    />
                </div>
                <div className="mx-auto w-2/3 sm:w-full">
                    <CustomSelect label="Categories" options={options} />
                </div>
                <div>
                    <button
                        type="button"
                        class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
                    >
                        Add Item
                    </button>
                    <button
                        type="button"
                        class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                    >
                        Edit Item
                    </button>
                    <button
                        type="button"
                        class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                    >
                        Delete Item
                    </button>
                </div>
            </div>

            {/* File Upload Section */}
            <div className="mt-4 mx-auto w-2/3">
                <input
                    class="block w-full h-10 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="multiple_files"
                    type="file"
                    multiple
                />
            </div>

            {/* Table Section */}
            <div className="mt-8">
                <CustomTable
                    titles={titles}
                    filterOptions={filterOptions}
                    query=""
                    data={data}
                    onQueryChange={handleQueryChange}
                    onFilterChange={handleFilterChange}
                />
            </div>
        </div>
    );
};

export default Items;
