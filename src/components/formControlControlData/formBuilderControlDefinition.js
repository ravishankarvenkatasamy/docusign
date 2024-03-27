import React, { useState } from 'react';
// import { InputText } from 'primereact/inputtext';
// import { Dropdown } from 'primereact/dropdown';
// import { Checkbox } from 'primereact/checkbox';
// import { Button } from 'primereact/button';
// import { RadioButton } from 'primereact/radiobutton';
// import { Calendar } from 'primereact/calendar';
// import { InputSwitch } from 'primereact/inputswitch';
// import { FileUpload } from 'primereact/fileupload';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { Divider } from 'primereact/divider';


// function formBuilderGrid1(props) {

//     return (
//             <div  className="row p-2 mx-0 my-2"><div className="col-md-12 p-3 border"></div></div>
//         );
  
// }

// function formBuilderGrid2 (props) {

//     return (
//             <div  className="row p-2 mx-0 my-2"><div className="col-md-6 p-3 border"></div><div className="col-md-6 p-3 border"></div></div>
//         );
    
// }

// function formBuilderGrid3 (props) {

//      return (
//             <div  className="row p-2 mx-0 my-2"><div className="col-md-4 p-3 border"></div><div className="col-md-4 p-3 border"></div><div className="col-md-4 p-3 border"></div></div>
//         );
   
// }

// function formBuilderGrid4(props) {

//    return (
//             <div  className="row p-2 mx-0 my-2"><div className="col-md-3 p-3 border"></div><div className="col-md-3 p-3 border"></div><div className="col-md-3 p-3 border"></div><div className="col-md-3 p-3 border"></div></div>
//         );
    
// }

function formBuilderText (props) {

     return (
            <p >This Is A Paragraph</p>
        );
    
}

function formBuilderHeading (props) {

     return (
            <h1>HEADING</h1>
        );
   
}

// function formBuilderInputField (props) {

//     return (
//             <div className="field" style={{ pointerEvents: "none" }}>
//                 <label htmlFor="textbox" className="block mb-0"></label>
//             <InputText   className="block" placeholder="placeholder"  />
//             </div>

//         );
   
// }

// function formBuilderDropDown(props) {

//     return (
//             <div className="field" style={{ pointerEvents: "none" }}>
//                 <label className="block mb-0" ></label>
//                 <Dropdown   />
//             </div>
//         );
  
// }

// function formBuilderCheckbox (props) {

//     return (
//             <div className="field-checkbox" style={{ pointerEvents: "none" }}>
//                 <label htmlFor="checkboxLabel"></label>
//             <Checkbox inputId={props.inputId}     />
//             </div>
//         );
    
// }

// function formBuilderButton (props) {

//      return (
//             <Button label="Submit" aria-label="Submit"   />

//         );
   
// }

// function formBuilderRadio (props) {

//   return (
//             <div className="field-radiobutton" style={{ pointerEvents: "none" }}>
//                 <label htmlFor="radioLabel" ></label>
//                 <RadioButton inputId="radioInput"    />
//             </div>
//         );
    
// }

// function formBuilderCalendar (props) {

//      return (
//             <div className="field" style={{ pointerEvents: "none" }}>
//                 <label htmlFor="Calender" className="block mb-0"></label>
//                 <Calendar  showIcon     />
//             </div>
//         );
    
// }

// function formBuilderSwitch (props) {

//      return (
//             <div className="field-checkbox" style={{ pointerEvents: "none" }}>
//                 <label htmlFor="switchLabel"></label>
//                 <InputSwitch   />
//             </div>
//         );
    
// }

// function formBuilderUpload (props) {

//      return (
//             <div className="field" style={{ pointerEvents: "none" }}>
//                 <label htmlFor="Upload" className="block mb-0"></label>
//                 <FileUpload mode="basic" name="demo[]"   accept="image/*" maxFileSize={1000000} auto chooseLabel="Upload" />
//             </div>
//         );
    
// }



// function FormBuilderTable (props) {

//     const [products, setProducts] = useState([
//         { "id": "1000", "code": "f230fh0g3", "name": "Bamboo Watch", "description": "Product Description", "image": "bamboo-watch.jpg", "price": 65, "category": "Accessories", "quantity": 24, "inventoryStatus": "INSTOCK", "rating": 5 },
//         { "id": "1001", "code": "nvklal433", "name": "Black Watch", "description": "Product Description", "image": "black-watch.jpg", "price": 72, "category": "Accessories", "quantity": 61, "inventoryStatus": "INSTOCK", "rating": 4 },
//         { "id": "1002", "code": "zz21cz3c1", "name": "Blue Band", "description": "Product Description", "image": "blue-band.jpg", "price": 79, "category": "Fitness", "quantity": 2, "inventoryStatus": "LOWSTOCK", "rating": 3 },
//         { "id": "1003", "code": "244wgerg2", "name": "Blue T-Shirt", "description": "Product Description", "image": "blue-t-shirt.jpg", "price": 29, "category": "Clothing", "quantity": 25, "inventoryStatus": "INSTOCK", "rating": 5 },
//         { "id": "1004", "code": "h456wer53", "name": "Bracelet", "description": "Product Description", "image": "bracelet.jpg", "price": 15, "category": "Accessories", "quantity": 73, "inventoryStatus": "INSTOCK", "rating": 4 },
//         { "id": "1005", "code": "av2231fwg", "name": "Brown Purse", "description": "Product Description", "image": "brown-purse.jpg", "price": 120, "category": "Accessories", "quantity": 0, "inventoryStatus": "OUTOFSTOCK", "rating": 4 },
//         { "id": "1006", "code": "bib36pfvm", "name": "Chakra Bracelet", "description": "Product Description", "image": "chakra-bracelet.jpg", "price": 32, "category": "Accessories", "quantity": 5, "inventoryStatus": "LOWSTOCK", "rating": 3 },
//         { "id": "1007", "code": "mbvjkgip5", "name": "Galaxy Earrings", "description": "Product Description", "image": "galaxy-earrings.jpg", "price": 34, "category": "Accessories", "quantity": 23, "inventoryStatus": "INSTOCK", "rating": 5 },
//         { "id": "1008", "code": "vbb124btr", "name": "Game Controller", "description": "Product Description", "image": "game-controller.jpg", "price": 99, "category": "Electronics", "quantity": 2, "inventoryStatus": "LOWSTOCK", "rating": 4 },
//         { "id": "1009", "code": "cm230f032", "name": "Gaming Set", "description": "Product Description", "image": "gaming-set.jpg", "price": 299, "category": "Electronics", "quantity": 63, "inventoryStatus": "INSTOCK", "rating": 3 }
//     ]);
   
//         return (
//             <div className="card" style={{ pointerEvents: "none" }}>
//                 <DataTable value={products} responsiveLayout="scroll" >
//                     <Column field="code" header="Code" ></Column>
//                     <Column field="name" header="Name" ></Column>
//                     <Column field="category" header="Category" ></Column>
//                     <Column field="quantity" header="Quantity" ></Column>
//                 </DataTable>
//             </div>
//         );
   
// }

// function formBuilderDivider(props){

//     return (
//             <Divider type="solid"  />
//         );
    
// }
export {  formBuilderText, formBuilderHeading };

// export { formBuilderGrid1, formBuilderGrid2, formBuilderGrid3, formBuilderGrid4, formBuilderText, formBuilderHeading, formBuilderInputField, formBuilderDropDown, formBuilderCheckbox, formBuilderButton, formBuilderRadio, formBuilderCalendar, formBuilderSwitch, formBuilderUpload, FormBuilderTable, formBuilderDivider };