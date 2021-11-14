from flask import Flask, render_template, url_for, request, redirect, jsonify

app = Flask('app')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/protein-suggestion')
def protein_suggestion():
    return render_template('protein-rec.html')


@app.route('/calorie-calculator', methods=['POST', 'GET'])
def calorie_calculator():
    if request.method == 'POST':
        # send date in dictionary

        user_data = request.get_json()

        name = user_data['name']

        age = int(user_data['age'])

        gender = user_data['gender']

        height = int(user_data['height'])

        weight = int(user_data['weight'])

        imperial = int(user_data['imperial'])

        activity = int(user_data['activity'])

        goal = int(user_data['goals'])

        if imperial == 1:
            weight /= 2.2046
            height *= 2.54
        else:
            pass

        bmr = 0
        bmra = 0
        final_calories = 0

        if gender == "M":
            bmr = round(10 * weight + 6.25 * height - 5 * age + 5)
        else:
            bmr = round(10 * weight + 6.25 * height - 5 * age - 161)

        if activity == 1:
            bmra = round(bmr * 1.2)
        elif activity == 2:
            bmra = round(bmr * 1.375)
        elif activity == 3:
            bmra = round(bmr * 1.55)
        elif activity == 4:
            bmra = round(bmr * 1.725)
        elif activity == 5:
            bmra = round(bmr * 1.9)

        if goal == 1:
            final_calories = bmra - 1000
        elif goal == 2:
            final_calories = bmra - 500
        elif goal == 3:
            final_calories = round(bmra)
        elif goal == 4:
            final_calories = bmra + 250
        elif goal == 5:
            final_calories = bmra + 500

        protein = round(final_calories * 0.05)

        print(name)

        answer = {
            'bmr': bmr,
            'bmr_a': bmra,
            'calorie': final_calories,
            'protein': protein
        }

        return jsonify(answer)
    else:
        return render_template('calorie-calc.html')


app.run(host='0.0.0.0', port=8080)
