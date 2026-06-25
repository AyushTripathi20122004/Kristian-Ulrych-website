<?php
include 'conn.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Success</title>
</head>
<body>

<?php

if(isset($_POST['submit'])) {

    $Name = $_POST['Name'];
    $Email = $_POST['Email'];
    $Subject = $_POST['Subject'];
    $Message = $_POST['Message'];

    $stmt = $conn->prepare("INSERT INTO getintouch (Name, Email, Subject, Messege) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $Name, $Email, $Subject, $Message);

    if ($stmt->execute()) {
?>
        <div class="bg-[#121417] h-screen w-screen flex items-center justify-center px-4">

    <div class="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-3xl shadow-2xl flex flex-col items-center gap-6 max-w-md w-full">

        <!-- Success Icon -->
        <div class="relative">
            <div class="absolute inset-0 bg-green-500/30 blur-2xl rounded-full"></div>

            <div class="relative w-28 h-28 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                <span class="text-white text-6xl font-bold">✓</span>
            </div>
        </div>

        <!-- Text -->
        <div class="text-center space-y-2">
            <h2 class="text-3xl font-bold text-white">
                Success!
            </h2>

            <p class="text-white/60">
                Your message has been sent successfully.
                We'll get back to you as soon as possible.
            </p>
        </div>

        <!-- Button -->
        <a href="index.html"
           class="mt-2 px-8 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition-all duration-300">
            Back to Home
        </a>

    </div>

</div>
<?php
    } else {
        echo "Data submission failed";
    }

    $stmt->close();
}
?>

</body>
</html>