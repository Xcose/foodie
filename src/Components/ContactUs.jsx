import React, { useState } from "react";
import { FormGroup, Input, Button, Tooltip, Label } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { SuccessMessage, ErrorMessage } from "../Shared/Notifications";
import Validation from "../Validation/ContactUsValidation";
import emailjs from "emailjs-com";

function ContactUs() {
	const initialContactData = {
		name: null,
		subject: null,
		email: null,
		message: null,
	};

	const [contactData, setContactData] = useState(initialContactData);
	const [validationErrors, setValidationErrors] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [tooltipOpen, setTooltipOpen] = useState(false);

	const toggle = () => setTooltipOpen(!tooltipOpen);

	const classText = (error) => {
		return `rounded-0 italic input ${error ? "is-invalid" : ""}`;
	};

	const onChange = (e) => {
		let UpdatedContactData = contactData;
		UpdatedContactData[e.target.name] = e.target.value;
		setContactData(UpdatedContactData);
	};

	const clear = () => {
		let UpdatedContactData = contactData;
		UpdatedContactData["name"] = null;
		UpdatedContactData["subject"] = null;
		UpdatedContactData["email"] = null;
		UpdatedContactData["message"] = null;
		setContactData(UpdatedContactData);
	};

	const Validate = () => {
		const valErrors = Validation(contactData);

		if (Object.keys(valErrors).length === 0) {
			onSubmit();
		} else {
			setValidationErrors(valErrors);
		}
	};

	const onSubmit = async () => {
		setIsLoading(true);
		try {
			await emailjs.sendForm(
				"smtp_server",
				"template_DwxJnuMN",
				"#contact_form",
				"user_2NUlgzcOgBlL7JKjxQraj"
			);
			const message = "Message has been sent!";
			SuccessMessage(message);
			clear();
		} catch (err) {
			console.log(err);
			ErrorMessage(err.message);
		}
		setIsLoading(false);
	};

	return (
		<div className="pt-5 text-center" id="contact">
			<div className="row justify-content-around">
				<div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
					<div className="text-lg-left text-center h4 h-100">
						<p className="display-4 my-5 font-weight-bold title text-center">
							<text className="p-lg-4">GET IN TOUCH</text>
						</p>
						<p className="lead text-muted px-4 px-lg-0 text-center text-lg-left">
							We would like to hear from you. Please fill out the form or use
							one of out other contact platforms. We look forward to hearing
							from you
						</p>
						<address className="lead text-muted mt-5">
							41 John Brown Street
							<br />
							extension 13
							<br />
							Mossel Bay
							<br />
							6500
							<br />
							<br />
							073 694 3166
						</address>
						<p className="h5">
							<a href="mailto:ntembekomonde@gmail.com" className="text-reset">
								<u>ntembekomonde@gmail.com</u>
							</a>
						</p>
					</div>
				</div>
				<div className="col-12 col-lg-5 p-5 text-left">
					<fieldset className="p-3">
						{/* <legend className="h3 mb-5">Talk to Us</legend> */}
						<form id="contact_form" className="text-left">
							<FormGroup>
								<Label className="p-2 text-muted">Name *</Label>
								<Input
									type="text"
									id="ContactName"
									className={classText(validationErrors.name)}
									// value={}
									onChange={(e) => {
										onChange(e);
									}}
									name="name"
								/>
								{validationErrors.name && (
									<Tooltip
										placement="right"
										isOpen={true}
										toggle={toggle}
										target="ContactName"
									>
										{validationErrors.name}
									</Tooltip>
								)}
							</FormGroup>
							<FormGroup>
								<Label className="p-2 text-muted">Email *</Label>
								<Input
									type="email"
									id="ContactEmail"
									className={classText(validationErrors.email)}
									value={contactData.email}
									onChange={(e) => {
										onChange(e);
									}}
									name="email"
								/>
								{validationErrors.email && (
									<Tooltip
										placement="right"
										isOpen={true}
										toggle={toggle}
										target="ContactEmail"
									>
										{validationErrors.email}
									</Tooltip>
								)}
							</FormGroup>
							<FormGroup>
								<Label className="p-2 text-muted">Subject *</Label>
								<Input
									type="subject"
									id="emailSubject"
									className={classText(validationErrors.subject)}
									value={contactData.subject}
									onChange={(e) => {
										onChange(e);
									}}
									name="subject"
								/>
								{validationErrors.subject && (
									<Tooltip
										placement="right"
										isOpen={true}
										toggle={toggle}
										target="emailSubject"
									>
										{validationErrors.subject}
									</Tooltip>
								)}
							</FormGroup>
							<FormGroup>
								<Label className="p-2 text-muted">Message *</Label>
								<Input
									type="textarea"
									id="ContactMessage"
									className={classText(validationErrors.message)}
									value={contactData.message}
									onChange={(e) => {
										onChange(e);
									}}
									rows="3"
									name="message"
								/>
								{validationErrors.message && (
									<Tooltip
										placement="right"
										isOpen={true}
										target="ContactMessage"
									>
										{validationErrors.message}
									</Tooltip>
								)}
							</FormGroup>
						</form>
						<Button
							onClick={() => {
								Validate();
							}}
							className="rounded-0"
							disabled={isLoading}
							color="dark"
							block
							outline
						>
							{isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Send"}
						</Button>
					</fieldset>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
