import React from 'react'
import { categories } from '../stub/categories'
import { Category } from '../components/Category'
import { Link } from 'react-router-dom'

export const CategoryListPage = () => {
  return (
    <div style={{ padding: '0 5rem', paddingBottom: '5rem' }}>
      <h2>Categories</h2>
      <p style={{ marginBottom: '4rem' }}>
        Feeling like having pizza? How about Sushi? Satisfy your cravings with a
        few quick clicks and enjoy the world of delivery! Check a great
        selection of restaurants by selecting a category below.
      </p>
      <div className="category-list">
        {categories.map((category) => (
          <Link to={`/categories/${category.title}`}>
            <Category {...category} />
          </Link>
        ))}
      </div>
    </div>
  )
}
