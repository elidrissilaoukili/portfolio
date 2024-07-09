


    {{-- content --}}
    <main>
        <section>

        </section>
    </main>


    <script>
        $(document).ready(function() {
            var owl = $('.owl-carousel');
            owl.owlCarousel({
                items: 1,
                loop: true,
                margin: 0,
                autoplay: true,
                autoplayTimeout: 1000,
                autoplayHoverPause: true
            });
            $('.play').on('click', function() {
                owl.trigger('play.owl.autoplay', [1000])
            })
            $('.stop').on('click', function() {
                owl.trigger('stop.owl.autoplay')
            })
        })
    </script>

    <!-- vendors -->
    <script src={{ asset('assets/owlcarousel_lib/vendors/highlight.js') }}></script>
    <script src={{ asset('assets/owlcarousel_lib/js/app.js') }}></script>

    @include('templates/footer')