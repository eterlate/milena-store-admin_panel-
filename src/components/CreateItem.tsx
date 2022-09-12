import React, {useState} from 'react'


const CreateItem = () => {

  const [form, setForm] = useState({
    name: '',
    price: 0,
    discount: 0,
    description: '',
    category: '',
    properties: ''
})

  const submitHandler = (event: React.FormEvent) => {
      event.preventDefault()
      console.log(form)
  }
  
  const changeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm({...form, [event.target.name]: event.target.value})
  }   

  return (
    <form className='create_item_form' onSubmit={submitHandler}>

        <label htmlFor="name">Название</label>
        <input
          type="text"
          name='name' 
          value={form.name} 
          onChange={changeForm}
        />

        <label htmlFor="price">Цена</label>
        <input 
        type="text" 
        name='price' 
        value={form.price} 
        onChange={changeForm} 
        />

        <label htmlFor="discount">Скидка</label>
        <input 
        type="text" 
        name='discount' 
        value={form.discount} 
        onChange={changeForm}
        />

        <label htmlFor="description">Описание</label>
        <input 
        type="text" 
        name='description' 
        value={form.description} 
        onChange={changeForm}
        />

        <label htmlFor="category">Категория</label>
        <input 
        type="text" 
        name='category' 
        value={form.category} 
        onChange={changeForm}
        />

        <label htmlFor="properties">Характеристики</label>
        <input
        type="text"
        name='properties' 
        value={form.properties} 
        onChange={changeForm}
        />

        <button type='submit'>Готово</button>
    </form>
  )
}

export default CreateItem