async function loadFeatures() {
    fetch("./features.json").then(features => features.json()).then((data) => 
    data.forEach((feature) => {
        createFeature(feature.name, feature.type, feature.usage, feature.description, feature.example);
    }));
} loadFeatures();

function hideAll() {
    $('#featurePage').hide();
    $('#serverSided').hide();
    $('#serverSidePages').hide();
    $('#clientSided').hide();
    $('#clientSidePages').hide();
} hideAll();

function showClientSided() {
    if ($('#serverSidePages').is(":visible")) {
        $("#serverSidePages").slideUp("slow", function () {
            $('#serverSided').hide();
            $('#serverSidePages').hide();
            if($('#clientSidePages').is(":visible")){
                $( "#clientSidePages" ).slideUp( "slow", function() {
                    $('#clientSided').hide();
                    $('#clientSidePages').hide();
                });
            } else {
                    $( "#clientSidePages" ).slideDown( "slow", function() {
                    });
                    $('#clientSided').show();
                    $('#clientSidePages').show();
            }
        });
    } else {
        if($('#clientSidePages').is(":visible")){
            $( "#clientSidePages" ).slideUp( "slow", function() {
                $('#clientSided').hide();
                $('#clientSidePages').hide();
            });
        } else {
                $( "#clientSidePages" ).slideDown( "slow", function() {
                });
                $('#clientSided').show();
                $('#clientSidePages').show();
        }
    }

}

function showServerSided() {
    if ($('#clientSidePages').is(":visible")) {
        $("#clientSidePages").slideUp("slow", function () {
            $('#clientSided').hide();
            $('#clientSidePages').hide();
            if($('#serverSidePages').is(":visible")){
                $( "#serverSidePages" ).slideUp( "slow", function() {
                    $('#serverSided').hide();
                    $('#serverSidePages').hide();
                });
            } else {
                    $( "#serverSidePages" ).slideDown( "slow", function() {
                    });
                    $('#serverSided').show();
                    $('#serverSidePages').show();
            }
        });
    } else {
        if($('#serverSidePages').is(":visible")){
            $( "#serverSidePages" ).slideUp( "slow", function() {
                $('#serverSided').hide();
                $('#serverSidePages').hide();
            });
        } else {
                $( "#serverSidePages" ).slideDown( "slow", function() {
                });
                $('#serverSided').show();
                $('#serverSidePages').show();
        }
    }
}

function createFeature (name, type, usage, desc, example) {
    if (type == "server") {
        $('#serverFeatureContainer').append(`
        <div class="feature">
            <div>${name}</div>
            <div class="desc">
                <p id="givenDesc">${desc}</p>
                <p id="givenCode">${usage}</p>
                <p id="givenExample">${example}</p>
            </div>
        </div>
        `);
    } else if (type == "client") {
        $('#clientFeatureContainer').append(`
        <div class="feature">
            <div>${name}</div>
            <div class="desc">
            <p id="givenDesc">${desc}</p>
            <p id="givenCode">${usage}</p>
            <p id="givenExample">${example}</p>
            </div>
        </div>
        `);
    }
}

// Checking if a feature is pressed
$(document).on('click', '.feature', function() {
    // Check if feature page is visible
    if ($('#featurePage').is(":visible")) {
        $('#featurePageTitle').text($(this).find('div:first').text());
        $('#featurePageDesc').text($(this).find('.desc').find('#givenDesc').text());
        $('#featurePageExample').text($(this).find('.desc').find('#givenExample').text());
        $('#featurePageCode').text($(this).find('.desc').find('#givenCode').text());
    } else {
        $('#featurePage').show();
        $('#featurePageTitle').text($(this).find('div:first').text());
        $('#featurePageDesc').text($(this).find('.desc').find('#givenDesc').text());
        $('#featurePageExample').text($(this).find('.desc').find('#givenExample').text());
        $('#featurePageCode').text($(this).find('.desc').find('#givenCode').text());
    }
});