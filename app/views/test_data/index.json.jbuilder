json.array!(@test_data) do |test_datum|
  json.extract! test_datum, :id, :name, :rank
  json.url test_datum_url(test_datum, format: :json)
end
