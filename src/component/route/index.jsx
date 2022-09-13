import React from 'react'

const Navroute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/shop" element={<Allproduct />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/blog" element={<Blogpage />} />
                <Route path="/products" element={<Allproduct />} />
                <Route path="*" element={<Error />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='/productdetails' element={<Productdetails />} />
                <Route path='/profilter' element={<FilterProduct />} />
                <Route path='/filter' element={<Shop />} />
            </Routes>
        </>
    )
}

export default Navroute