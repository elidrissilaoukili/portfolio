<!DOCTYPE html>
<html>

<head>
    <title>Projects</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>

<body>

    <div id="projects-container">
        @include('templates.projects-section')
    </div>

</body>

</html>