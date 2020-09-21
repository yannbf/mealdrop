import React from 'react'
import { useHistory } from 'react-router-dom'
import { CategoryList } from '../components/CategoryList'
import { TopBanner } from '../components/TopBanner'
import { categories } from '../stub/categories'

export const CategoryListPage = () => {
  const history = useHistory()
  return (
    <>
      <TopBanner title="Categories" onBackClick={() => history.goBack()} />
      <div className="container">
        <h2 style={{ marginTop: '4.5rem' }}>What's on the menu?</h2>
        <p style={{ marginBottom: '2.5rem' }}>
          Feeling like having pizza? How about Sushi? Satisfy your cravings with
          a few quick clicks and enjoy the world of delivery! Check a great
          selection of restaurants by selecting a category below.
        </p>
        <CategoryList categories={categories} />
      </div>
    </>
  )
}
