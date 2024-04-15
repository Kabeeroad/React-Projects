import Dropdown from "./Dropdown"
import DropdownItem from "./DropdownItem"

const CategoryMenu = () => {
    return (
        <div className=" bg-yellow-500 gap-5  py-4 flex flex-wrap justify-center">
            <Dropdown title="Electronics">
                <DropdownItem text="Charger" />
                <DropdownItem text="Laptops" />
                <DropdownItem text="Tablets" />
                <DropdownItem text="Mobiles" />
            </Dropdown>
            <Dropdown title="TV & Appliances">
                <DropdownItem text="Music Player" />
                <DropdownItem text="Remote" />
                <DropdownItem text="Speakers" />
                <DropdownItem text="TV" />
            </Dropdown>

            <Dropdown title="Men">
                <DropdownItem text="Shoes" />
                <DropdownItem text="T-shirt" />
                <DropdownItem text="Blazers" />
                <DropdownItem text="Formal Pants" />
            </Dropdown>

        </div>
    )
}

export default CategoryMenu
