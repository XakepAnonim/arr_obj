import './App.css';
import {useState} from "react";

// Arrays
// function App() {
//     const [array, setArray] = useState([1, 2, 3, 4, 5]);
//     const [addElement, setAddElement] = useState('');
//     const [removeIndex, setRemoveIndex] = useState(0);
//     const [updateIndex, setUpdateIndex] = useState(0);
//
//     const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
//     const [newNote, setNewNote] = useState('');
//
//     const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     const [numbers, setNumbers] = useState(array1);
//
//     const [editIndex, setEditIndex] = useState(null);
//     const [editedNote, setEditedNote] = useState('');
//
//     const [inputValues, setInputValues] = useState(['', '', '', '', '']);
//
//
//     const handleAddElement = () => {
//         setArray([...array, parseInt(addElement)]);
//         setAddElement('');
//     }
//
//     const handleRemoveElement = () => {
//         const newArray = [...array];
//         newArray.splice(removeIndex, 1);
//         setArray(newArray);
//     }
//
//     const handleUpdateElement = () => {
//         const newArray = [...array];
//         newArray[updateIndex] = parseInt(addElement);
//         setArray(newArray);
//         setAddElement('');
//     }
//
//     const handleReverseArray = () => {
//         setArray([...array].reverse());
//     }
//
//     const handleInputChange = (e) => {
//         setNewNote(e.target.value);
//     }
//
//     const handleInputBlur = () => {
//         if (newNote.trim() !== '') {
//             setNotes([...notes, newNote.trim()]);
//             setNewNote('');
//         }
//     }
//
//     const handleDeleteNote = (index) => {
//         const newNotes = [...notes];
//         newNotes.splice(index, 1);
//         setNotes(newNotes);
//     }
//
//     const calculateAverage = () => {
//         const sum = numbers.reduce((acc, num) => acc + num, 0);
//         return sum / numbers.length;
//     }
//
//     const handleInputChange1 = (index, value) => {
//         const newNumbers = [...numbers];
//         newNumbers[index] = parseInt(value) || 0;
//         setNumbers(newNumbers);
//     }
//
//     const handleEditStart = (index) => {
//         setEditIndex(index);
//         setEditedNote(notes[index]);
//     }
//
//     const handleEditEnd = (index) => {
//         const newNotes = [...notes];
//         newNotes[index] = editedNote;
//         setNotes(newNotes);
//         setEditIndex(null);
//     }
//
//     const handleInputChange2 = (e) => {
//         setEditedNote(e.target.value);
//     }
//
//     const handleInputChange3 = (e, index) => {
//         const newInputValues = [...inputValues];
//         newInputValues[index] = e.target.value;
//         setInputValues(newInputValues);
//     }
//
//     const handleAddNote = (index) => {
//         if (inputValues[index].trim() !== '') {
//             const newNotes = [...notes];
//             newNotes[index] = inputValues[index].trim();
//             setNotes(newNotes);
//
//             const newInputValues = [...inputValues];
//             newInputValues[index] = '';
//             setInputValues(newInputValues);
//         }
//     }
//
//
//     return (
//         <>
//             <div>
//                 <div>
//                     <input
//                         type="number"
//                         value={addElement}
//                         onChange={(e) => setAddElement(e.target.value)}
//                     />
//                     <button onClick={handleAddElement}>Добавить элемент
//                     </button>
//                 </div>
//                 <div>
//                     <input
//                         type="number"
//                         value={removeIndex}
//                         onChange={(e) => setRemoveIndex(parseInt(e.target.value))}
//                     />
//                     <button onClick={handleRemoveElement}>Удалить
//                         элемент
//                     </button>
//                 </div>
//                 <div>
//                     <input
//                         type="number"
//                         value={addElement}
//                         onChange={(e) => setAddElement(e.target.value)}
//                     />
//                     <input
//                         type="number"
//                         value={updateIndex}
//                         onChange={(e) => setUpdateIndex(parseInt(e.target.value))}
//                     />
//                     <button onClick={handleUpdateElement}>Изменить
//                         элемент
//                     </button>
//                 </div>
//                 <div>
//                     <button onClick={handleReverseArray}>Перевернуть
//                         массив
//                     </button>
//                 </div>
//                 <div>
//                     <h3>Текущий массив: {JSON.stringify(array)}</h3>
//                 </div>
//             </div>
//
//             <div>
//                 <ul>
//                     {notes.map((note, index) => (
//                         <li key={index}>
//                             {note} <br/>
//                             <button
//                                 onClick={() => handleDeleteNote(index)}>Удалить
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//                 <input
//                     type="text"
//                     placeholder="Добавить новый пункт"
//                     value={newNote}
//                     onChange={handleInputChange}
//                     onBlur={handleInputBlur}
//                 />
//             </div>
//
//             <div>
//                 <p>Среднее арифметическое: {calculateAverage()}</p>
//                 <ul>
//                     {numbers.map((number, index) => (
//                         <li key={index}>
//                             <input
//                                 type="number"
//                                 value={number}
//                                 onChange={(e) => handleInputChange1(index, e.target.value)}
//                             />
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//
//             <div>
//                 <ul>
//                     {notes.map((note, index) => (
//                         <li key={index}>
//                             {editIndex === index ? (
//                                 <>
//                                     <input
//                                         type="text"
//                                         value={editedNote}
//                                         onChange={handleInputChange2}
//                                         onBlur={() => handleEditEnd(index)}
//                                     /> <br/>
//                                     <button
//                                         onClick={() => handleEditEnd(index)}>Сохранить
//                                     </button>
//                                 </>
//                             ) : (
//                                 <>
//                                     {note} <br/>
//                                     <button
//                                         onClick={() => handleEditStart(index)}>Редактировать
//                                     </button>
//                                 </>
//                             )}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//
//             <div>
//                 <ul>
//                     {notes.map((note, index) => (
//                         <li key={index}>
//                             <span>{note}</span> <br/>
//                             <input
//                                 type="text"
//                                 value={inputValues[index]}
//                                 onChange={(e) => handleInputChange3(e, index)}
//                                 placeholder="Введите пункт списка"
//                             />
//                             <button
//                                 onClick={() => handleAddNote(index)}>Сохранить
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </>
//     )
// }


// Objects
// function App() {
//     const [props, setProps] = useState({
//         prop1: 'Value1',
//         prop2: 'Value2',
//         prop3: 'Value3'
//     })
//     const handlePropChange = (propName) => {
//         setProps((prevProps) => ({
//             ...prevProps,
//             [propName]: `fasfas`
//         }))
//     }
//
//     const initProds = [
//         {id: 1, name: 'prod1', catg: 'catg1', cost: 100},
//         {id: 2, name: 'prod2', catg: 'catg2', cost: 200},
//         {id: 3, name: 'prod3', catg: 'catg3', cost: 300},
//     ]
//     const [products, setProducts] = useState(initProds)
//     const [superProduct, setSuperProduct] = useState({
//         id: '',
//         name: '',
//         catg: '',
//         cost: ''
//     })
//     const [edit, setEdit] = useState(null)
//
//     const handleDelProduct = (id) => {
//         setProducts(products.filter(prod => prod.id !== id))
//     }
//
//     const handleInputChange = (e, field) => {
//         setSuperProduct({
//             ...superProduct,
//             [field]: e.target.value
//         })
//     }
//
//     const handleAddProduct = () => {
//         if (superProduct.name && superProduct.catg && superProduct.cost) {
//             setProducts([...products, {
//                 ...superProduct,
//                 id: products.length + 1
//             }])
//             setSuperProduct({id: '', name: '', catg: '', cost: ''})
//         } else {
//             alert('Пожалуйста, заполните все поля для добавления продукта.');
//         }
//     }
//
//     const handleEditProduct = (id) => {
//         const productToEdit = products.find(product => product.id === id);
//         setSuperProduct(productToEdit);
//         setEdit(id);
//     }
//
//     const handleUpdProduct = () => {
//         const updatedProducts = products.map(product =>
//             product.id === edit ? superProduct : product
//         );
//         setProducts(updatedProducts);
//         setSuperProduct({id: '', name: '', catg: '', cost: ''});
//         setEdit(null);
//     }
//
//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         if (superProduct.name && superProduct.catg && superProduct.cost) {
//             if (edit !== null) {
//                 const updatedProducts = products.map(product =>
//                     product.id === edit ? superProduct : product
//                 );
//                 setProducts(updatedProducts);
//                 setSuperProduct({id: '', name: '', catg: '', cost: ''});
//                 setEdit(null);
//             } else {
//                 setProducts([...products, {
//                     ...superProduct,
//                     id: products.length + 1
//                 }]);
//                 setSuperProduct({id: '', name: '', catg: '', cost: ''});
//             }
//         } else {
//             {
//                 edit ? alert('Пожалуйста, заполните все поля для редактирования продукта.') : alert('Пожалуйста, заполните все поля для добавления продукта.')
//             }
//         }
//     }
//
//     return (
//         <>
//             <div>
//                 <button
//                     onClick={() => handlePropChange('prop1')}>Изменить
//                     prop1
//                 </button>
//                 <button
//                     onClick={() => handlePropChange('prop2')}>Изменить
//                     prop2
//                 </button>
//                 <button
//                     onClick={() => handlePropChange('prop3')}>Изменить
//                     prop3
//                 </button>
//                 <p>{`prop1: ${props.prop1}, prop2: ${props.prop2}, prop3: ${props.prop3}`}</p>
//             </div>
//
//             <table border="1">
//                 <thead>
//                 <tr>
//                     <th> ID</th>
//                     <th> Name</th>
//                     <th> Category</th>
//                     <th> Cost</th>
//                     <th> ...</th>
//                     <th> ...</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {products.map((product) => (
//                     <tr key={product.id}>
//                         <td>{product.id}</td>
//                         <td>{product.name}</td>
//                         <td>{product.catg}</td>
//                         <td>{product.cost}</td>
//                         <td>
//                             <button
//                                 onClick={() => handleDelProduct(product.id)}>Удалить
//                             </button>
//                         </td>
//                         <td>
//                             <button
//                                 onClick={() => handleEditProduct(product.id)}>Редактировать
//                             </button>
//                         </td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//
//             <div>
//                 <h2>{edit ? 'Редактировать продукт:' : 'Добавить новый продукт:'}</h2>
//                 <div>
//                     <input
//                         type="text"
//                         placeholder="Название"
//                         value={superProduct.name}
//                         onChange={(e) => handleInputChange(e, 'name')}
//                     />
//                     <input
//                         type="text"
//                         placeholder="Категория"
//                         value={superProduct.catg}
//                         onChange={(e) => handleInputChange(e, 'catg')}
//                     />
//                     <input
//                         type="number"
//                         placeholder="Стоимость"
//                         value={superProduct.cost}
//                         onChange={(e) => handleInputChange(e, 'cost')}
//                     />
//                     {edit ? (
//                         <button onClick={handleUpdProduct}>Обновить
//                             продукт</button>
//                     ) : (
//                         <button onClick={handleAddProduct}>Добавить
//                             продукт</button>
//                     )}
//                 </div>
//             </div>
//
//             <div>
//                 <h2>{edit !== null ? 'Редактировать продукт:' : 'Добавить новый продукт:'}</h2>
//                 <form onSubmit={handleFormSubmit}>
//                     <input
//                         type="text"
//                         placeholder="Название"
//                         value={superProduct.name}
//                         onChange={(e) => handleInputChange(e, 'name')}
//                     />
//                     <input
//                         type="text"
//                         placeholder="Категория"
//                         value={superProduct.catg}
//                         onChange={(e) => handleInputChange(e, 'catg')}
//                     />
//                     <input
//                         type="number"
//                         placeholder="Стоимость"
//                         value={superProduct.cost}
//                         onChange={(e) => handleInputChange(e, 'cost')}
//                     />
//                     <button
//                         type="submit">{edit !== null ? 'Обновить продукт' : 'Добавить продукт'}</button>
//                 </form>
//             </div>
//         </>
//     )
// }

export default App;
