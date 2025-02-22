const ContactPage = () => {
	return (
		<div>
			<div className="calendly-inline-widget" data-url="https://calendly.com/bennyng/meeting?hide_event_type_details=1&hide_gdpr_banner=1" style={{ minWidth: '320px', height: '700px' }}></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
		</div>
	);
};

export default ContactPage;