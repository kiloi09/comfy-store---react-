import { Form, useLoaderData, Link } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';


const Filters = () => {

  const { meta, params } = useLoaderData()
  const { search, company, category, shipping, order, price } = params

  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      
      {/* SEARCH */}
      <FormInput
        type='search'
        label='search product'
        name='search'
        defaultValue={search}
        size='input-sm'
      />

      {/* FILTER */}
      <FormSelect
        label='select category'
        name='category'
        list={meta.categories}
        defaultValue= {category}
        size='select-sm'
      />

      <FormSelect
        label='select company'
        name='company'
        list={meta.companies}
        defaultValue={company}
        size='select-sm'
      />

      <FormSelect
        label='sort by'
        name='order'
        list={['a-z', 'z-a', 'high', 'low']}
        defaultValue={order}
        size='select-sm'
      />

      {/* RANGE */}
      <FormRange
        label='select price'
        name= 'price'
        price={price}
        size='range-sm'
      />

      {/* CHECKBOX */}
      <FormCheckbox
        label='free shipping'
        name= 'shipping'
        defaultValue={shipping}
        size='checkbox-sm'
      />

      {/* BUTTONS */}
      <button type='submit' className='btn btn-primary btn-sm uppercase'>
        search
      </button>
      <Link to='/products' className='btn btn-accent btn-sm uppercase'>
        reset
      </Link>
    </Form>
  );
};

export default Filters;