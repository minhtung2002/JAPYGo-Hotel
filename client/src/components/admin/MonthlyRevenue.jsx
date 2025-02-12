import React, { useState, useEffect } from "react"
import { cancelBooking, getAllBookings } from "../utils/ApiFunctions"
import Header from "../common/Header"
import RevenueTable from "../booking/RevenueTable"
import { bookRoom, getRoomById } from "../utils/ApiFunctions"
import { useNavigate, useParams } from "react-router-dom"
import moment from "moment"

const MonthlyRevenue = () => {
	const [bookingInfo, setBookingInfo] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState("")

	useEffect(() => {
		setTimeout(() => {
			getAllBookings()
				.then((data) => {
					setBookingInfo(data)
					setIsLoading(false)
				})
				.catch((error) => {
					setError(error.message)
					setIsLoading(false)
				})
		}, 1000)
	}, [])
	
	const handleBookingCancellation = async (bookingId) => {
		try {
			await cancelBooking(bookingId)
			const data = await getAllBookings()
			setBookingInfo(data)
		} catch (error) {
			setError(error.message)
		}
	}
	
	return (
		<section style={{ backgroundColor: "whitesmoke" }}>
			<Header title={""} />
			{error && <div className="text-danger">{error}</div>}
			{isLoading ? (
				<div>Loading existing bookings</div>
			) : (
				<RevenueTable 
					bookingInfo={bookingInfo}
					handleBookingCancellation={handleBookingCancellation}
					
				/>
			)}
		</section>
	)
}

export default MonthlyRevenue
