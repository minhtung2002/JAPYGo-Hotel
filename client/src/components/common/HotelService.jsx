import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import Header from "./Header"
import {
	FaClock,
	FaCocktail,
	FaParking,
	FaSnowflake,
	FaTshirt,
	FaUtensils,
	FaWifi
} from "react-icons/fa"

const HotelService = () => {
	return (
		<>
			<div className="mb-2">
				<Header title={""} />

				<Row className="mt-4">
					<h4 className="text-center">
						Services at <span className="hotel-color"> JAPY Go </span>Hotel
					</h4>
				</Row>
				<hr />

				<Row xs={1} md={2} lg={3} className="g-4 mt-2">
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className="hotel-color">
									<FaWifi /> WiFi
									<br></br>
								</Card.Title>
								<Card.Text>Stay connected with high-speed internet access at our JAPY GO hotel .</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className="hotel-color">
									<FaUtensils /> Breakfast
									<br></br>
								</Card.Title>
								<Card.Text>Start your day with a delicious breakfast buffet at our JAPY GO hotel.</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className="hotel-color">
									<FaTshirt /> Laundry
									<br></br>
								</Card.Title>
								<Card.Text>Keep your clothes clean and fresh with our laundry service.</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className="hotel-color">
									<FaCocktail /> Mini-bar
								</Card.Title>
								<Card.Text>Enjoy a refreshing drink or snack from our in-room mini-bar.</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className="hotel-color">
									<FaParking /> Parking
								</Card.Title>
								<Card.Text>Park your car conveniently in our on-site parking lot at our JAPY GO hotel.</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className="hotel-color">
									<FaSnowflake /> Air conditioning
								</Card.Title>
								<Card.Text>Stay cool and comfortable with our air conditioning system.</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
			<hr />
		</>
	)
}

export default HotelService