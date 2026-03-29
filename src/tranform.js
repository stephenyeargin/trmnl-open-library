function transform(input) {
  const count =
    input.trmnl &&
    input.trmnl.plugin_settings &&
    input.trmnl.plugin_settings.custom_fields_values &&
    input.trmnl.plugin_settings.custom_fields_values.open_library_count
      ? parseInt(input.trmnl.plugin_settings.custom_fields_values.open_library_count, 10)
      : 10;

  function trimList(list) {
    if (!list) return list;
    return {
      numFound: list.numFound,
      reading_log_entries: (list.reading_log_entries || []).slice(0, count).map(function (entry) {
        return {
          logged_date: entry.logged_date,
          work: {
            title: entry.work.title,
            author_names: entry.work.author_names,
            cover_edition_key: entry.work.cover_edition_key
          }
        };
      })
    };
  }

  return {
    IDX_0: { displayname: input.IDX_0.displayname },
    IDX_1: trimList(input.IDX_1),
    IDX_2: trimList(input.IDX_2),
    IDX_3: trimList(input.IDX_3)
  };
}

