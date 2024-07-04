import uuid


def get_benchmark():
    name = "maxProperties"
    description = (
        "A benchmark for measuring performance of the implementation "
        "for the maxProperties keyword."
    )

    max_num_properties = 1000000
    num_properties = 10000

    benchmarks = []
    while num_properties <= max_num_properties:
        invalid_object = _create_object_with_num_properties(num_properties+10)
        valid_object_with_one_less = _create_object_with_num_properties(
            num_properties-1
        )
        valid_object_with_one_property = _create_object_with_num_properties(
            1
        )
        benchmarks.append(dict(
            name=f"Maximum Required Properties - {num_properties}",
            description=(
                f"Validating the `maxProperties` keyword for maxProperties - {num_properties}."
            ),
            schema=dict(maxProperties=num_properties),
            tests=[
                dict(description="Valid Object with One", instance=valid_object_with_one_property),
                dict(description="Valid Object with One Less", instance=valid_object_with_one_less),
                dict(description="Invalid Object", instance=invalid_object),
            ],
        ))
        num_properties *= 10

    return dict(
        name=name,
        description=description,
        benchmarks=benchmarks,
    )


def _create_object_with_num_properties(num_properties):
    return {
        uuid.uuid4().hex: 10 for _ in range(num_properties)
    }
