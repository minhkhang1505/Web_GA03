$(document).ready(function () {
	$(".toast").toast({
		autohide: true,
	});

	$('button[type="submit"]').on("click", function (event) {
		const form = $(this).closest("form")[0];
		if (form.checkValidity() === false) {
		} else {
			event.preventDefault();
			$(".toast").toast("show");
			$("form").trigger("reset");
			$("#preview").hide();
			$("#preview-image").hide();
		}
	});

	$("#file-upload").on("change", function () {
		const file = this.files[0];
		if (file) {
			const reader = new FileReader();

			reader.onload = function (e) {
				if (
					file.type == "image/png" ||
					file.type == "image/jpeg" ||
					file.type == "image/jpg"
				) {
					$("#preview-image")
						.attr("src", e.target.result)
						.show();

					$("#preview").hide();
				} else {
					$("#preview")
						.attr("src", e.target.result)
						.show();

					$("#preview-image").hide();
				}
			};

			reader.readAsDataURL(file);
		}
	});
});
